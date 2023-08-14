function getName(firstName, lastName, displayName) {
    let firstName = "John", 
    let lastName  = "Jack"
    let displayName = displayName
        let name = `${firstName}, ${lastName}`;
        displayName(name);
      }
      let displayName = function (name) {
        console.log(name);
      };
      getName("John", "Jack", displayName);