const documento = (doc: number | string): void => {
  console.log(`Seu documento é: ${doc}`);
};

documento(123454324);

const estadosDaMateria = (materia: { liq: string; gas: string; solid: string }): void => {
  console.log(materia);
};

estadosDaMateria({ liq: 'liquido', gas: 'gasoso', solid: 'sólido'});