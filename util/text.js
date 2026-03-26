// {} => bloco
// () => parâmetro
// [] => índice

// indentado / identado / indentation
export function half(texto) {
	let metade = ""

	for (let i = 0; i < texto.length / 2; i++) {
		metade += texto[i]
	}

	return metade
}