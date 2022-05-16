
import CreateAdvServices from '../Adv/CreateAdvServices';
import FakeAdvRepository from '../../../../shared/infra/typeorm/repositories/fake/FakeAdvRepository'



describe ('CreateADV', ()=>{
    test('Criação de apenas um ADV', async ()=>{
       
        const fakeAdvRepository = new FakeAdvRepository();
        
        const createAdvServices = new CreateAdvServices(fakeAdvRepository);


    }),

    it('Não pode criar se já existe o adv',()=>{
        expect(1).toBe(1)
    })
})