# Testing (Testagem)

## Add a test library (or framework)

Existem várias opções para cada plataforma. Para JS, por exemplo:

- Jest
- Vitest
- Mocha
- Jasmine
- Cypress

Algumas suportam testes unitários, outros baseados em especificações e algumas fazem end-to-end.

Adicionando a **vitest**.

```sh
npm install vitest --save-dev
```

## Writing tests

Criar um arquivo com o sufixo `.test.js` e escrever as assertivas, por exemplo:

```js
// calc.test.js
import { test, expect } from "vitest"
import { sqrt } from "./calc.js"

test("A raiz quadrada de 81 é 9", () => {
    expect(sqrt(81)).toBe(9);
});
```

Executar no terminal:

```sh
npx vitest
```

Alternativamente, alterar o `package.json` de:

```json
{
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // demais propriedades
}
```

para:

```json
{
  "main": "index.js",
  "scripts": {
    "test": "vitest"
  },
  // demais propriedades
}
```

E executar `npm test` no terminal.

O comando `vitest` roda no modo interativo, para rodar uma vez, altere para `vitest run`:

## Assertives or Matchers

```js
// comparações simples
expect(value).toBe(expected) // Strict equality (Object.is)
expect(value).toEqual(expected) // Deep equality (verifica o conteúdo das propriedades).
expect(value).toStrictEqual(expected) // Deep equality (verifica inclusive os tipos)
expect(value).not.toBe(expected) // Inverte
// veracidade ou falsidade
expect(value).toBeDefined() // deve ser definido
expect(value).toBeUndefined() // deve ser indefinido
expect(value).toBeNull() // deve ser nulo
expect(value).toBeNaN() // deve ser NaN
expect(value).toBeTruthy() // deve ser verídico
expect(value).toBeFalsy() // deve ser falseável (0, false, "", null).
// comparações numéricas
expect(value).toBeGreaterThan(n) // deve ser maior que
expect(value).toBeGreaterThanOrEqual(n) 
expect(value).toBeLessThan(n) // deve ser menor que
expect(value).toBeLessThanOrEqual(n)
expect(value).toBeCloseTo(n, precision) // deve ser próximo à
// strings
expect(string).toMatch(regex) // deve seguir o padrão
expect(string).toContain(excerto) // deve conter o excerto
expect(string).toHaveLength(n) // deve ter o comprimento
// arrays e objetos
expect(array).toContain(item) // deve conter o item
expect(array).toContainEqual(item) // checar se um dado objeto com a estrutura existe no array
expect(object).toHaveProperty(keyPath, value?) // verificar se o objeto tem certa propriedade
expect(object).toMatchObject(subset) // verificar se o objeto possui certas propriedades
// erros e exceções
expect(fn).toThrow(error?) // verifica se a fução lança uma exceçã
```

## Code Coverage

Para checar se as instruções nos arquivos fonte estão sendo testadas de fato precisamos olhar para a cobertura de testes com o comando:

```sh
npx vitest --coverage
```

Vai solicitar a adição do `@vitest/coverage-v8`.

Verificar a pasta coverage para os resultados. Pode ser customizado com `vitest.config.js`, por exemplo:

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      include: ['**/*.js'],
      exclude: ['node_modules/', 'test/'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    },
  },
})
```

