
const { Files } = require('vscode-languageserver/node')
const { URI } = require('vscode-uri')

async function main() {
	const xoFilePath = await Files.resolve('xo', undefined, '.')
	const xoUri = URI.file(xoFilePath).toString()
	await import(xoUri)
}

main()
