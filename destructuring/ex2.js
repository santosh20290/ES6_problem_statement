let savedFiled = {
	extension : "png",
	name : "shaktiman",
	size : 100
}

function fileSummary(file){
	return `file name is : ${file.name}.${file.extension} with size ${file.size}`;
}

fileSummary(savedFiled)

"---------------------------------------"

function fileSummary({extension, name, size}){
	return `file name is : ${name}.${extension} with size ${size}`;
}

fileSummary(savedFiled)
