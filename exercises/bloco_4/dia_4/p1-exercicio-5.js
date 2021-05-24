let info = {
    personagem: ': Margarida',
    origem: ': Pato Donald',
    nota: ': Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

info['personagem'] += ', Tio Patinhas',
info['origem'] += ', Pato Donald e Christmas on Bear Mountain, Dell`s Four Color Comics #178',
info['nota'] += ', O último MacPatinhas',
info['recorrente'] = ': Ambos recorrentes'

for (let key in info){
    console.log (key, info[key]);
}