const student = require('./student')

describe('Teste para alunos', () =>{ // <- uma funcao que normalmente descrevemos o nosso teste.
    it('Deve retornar 10 quando as notas forem 5, 3, 2', () => { // <- os casos de uso
        const notes = [5,3,2];
        expect(student.sum(notes)).toEqual(10); // <- o que esperamos
    })

    it('Deve retornar zero quando uma das notas for zero', () => {
        const notes =  [1,2,3,0];
        expect(student.sum(notes)).toEqual(0);
    })

    it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', ()=> {
        const notes = [1,2,3,4,5,6,7]
        expect(student.sum(notes)).toEqual(64)
    })
}) 