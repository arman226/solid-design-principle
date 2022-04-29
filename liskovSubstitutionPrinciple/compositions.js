const frontEndDeveloper = ({ name, company }) => ({
  createHTML: () => {
    console.log(`${name} from ${company} can create Wonderful User Interfaces`);
  },
});

const backEndDeveloper = ({ name, company }) => ({
  createDatabaseTable: () => {
    console.log(
      `${name} from ${company} can create Normalized Database Tables`
    );
  },
  createEndpoints: () => {
    console.log(`${name} from ${company} can create useful Restful APIs`);
  },
});

const devOpsEngineer = ({ name, company }) => ({
  createCICDPipeline: () => {
    console.log(`${name} from ${company} can automate Deployments`);
  },
});

const fullStackDeveloper = ({ name, company }) => {
  // composition of FED,BED,DOE
  const developer = { name, company };

  return {
    ...developer,
    ...frontEndDeveloper(developer),
    ...backEndDeveloper(developer),
    ...devOpsEngineer(developer),
  };
};

const kazuyaTheFullStackDeveloper = fullStackDeveloper({
  name: "Kazuya",
  company: "ABC Company",
});

kazuyaTheFullStackDeveloper.createCICDPipeline();
kazuyaTheFullStackDeveloper.createEndpoints();
kazuyaTheFullStackDeveloper.createHTML();
kazuyaTheFullStackDeveloper.createDatabaseTable();
