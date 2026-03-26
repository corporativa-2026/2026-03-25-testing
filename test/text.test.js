// text.test.js
// testes unitários
// assertiva/matcher (coincidência)
import { test, expect } from "vitest";
import { half } from "../util/text.js"

// () => {} arrow function

test('Metade de "internet" deve retornar a primeira metade "inte"', () => {
	// assertiva(s)
	expect(half("internet")).toBe("inte")
})

test("Metade de IFRS é IF", () => {
	expect(half("IFRS")).toBe("IF")
})

// 01234567890
// informatica = length = 11 // i < 5.5
// 
test("Metade de informatica é inform (o caractere excedente fica na primeira metade)", () => {
	expect(half("informatica")).toBe("inform")
})

test("a segunda metade de internet é rnet", () => {
	expect(half("internet", 2)).toBe("rnet")
})