const busboy = require("busboy");
const fs = require("fs");
const { join } = require("path");

// const fs = require("fs");
// const FormData = require("form-data");

// const formdata = new FormData();
// formdata.append("file", fs.createReadStream(<filePath>));
// axios.post(`${ORIGIN}/upload`, formdata, {
// 	headers: {
// 		"Content-Type": "multipart/form-data",
// 	},
// });

module.exports = function (app, path) {
	app.post(path, (req, res) => {
		const { headers, body, params, pipe } = req;

		const dir = join(__dirname, params.dir);
		let filePath;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		const bb = busboy({
			headers,
			limits: {
				fileSize: 1024 * 1024 * 10,
				files: 1,
			},
		});

		bb.on("file", (name, file, { filename }) => {
			filePath = join(dir, filename);
			file.pipe(fs.createWriteStream(filePath));
		});

		bb.on("close", function () {
			res.send("文件上传成功-->" + filePath);
		});

		return req.pipe(bb);
	});
};
