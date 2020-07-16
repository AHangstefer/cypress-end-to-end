//import {sum, square} from '../../src/util';

describe('testing math util function', ()=>{
    instanceof('sum returns correct value', ()=>{
        expect(sum(1,2)).to.equal(3)
    })

    it('square returns correct value', ()=>{
        expect (square(2).to.equal(4))
    })
})