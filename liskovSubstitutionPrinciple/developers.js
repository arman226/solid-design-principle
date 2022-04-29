class Developer {
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createHTML() {
    console.log("I create wonderful User Interfaces");
  }

  createDatabaseTable() {
    console.log("I create Normalized Database Tables");
  }

  createCICDPipeline() {
    console.log("I automate deployments.");
  }

  createEndpoints() {
    console.log(" I create Restful APIs");
  }
}

class ReactDeveloper extends Developer {
  createCICDPipeline() {
    throw Error("It's not my responsibility");
  }

  createDatabaseTable() {
    throw Error("I am not a Back-end Developer");
  }

  createEndpoints() {
    throw Error("That's for the Back-end");
  }
}

class NodeJSDeveloper extends Developer {
  createHTML() {
    throw Error("I ain't a Front-end Developer");
  }

  createCICDPipeline() {
    throw Error("I am not a DevOps Engineer");
  }
}

class JenkinksDevOpsEngineer extends Developer {
  createHTML() {
    throw Error("I don't do that");
  }

  createDatabaseTable() {
    throw Error("I'm not supposed to do that");
  }

  createEndpoints() {
    throw Error("That's not my responsibility");
  }
}

new ReactDeveloper("test", "test").createHTML(); //!!
