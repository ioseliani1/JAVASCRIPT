const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },


]



characters.map((item) => {
  if(item.name === "Anakin Skywalker"){
    console.log(`FOUND ${item.name} HIS EYE COLOR IS ${item.eye_color}, HIS HEIGHT IS ${item.height}, HIS MASS IS ${item.mass}KG`)
  } 
  

})




// for (let i=0 ; i < characters.length; i++){
//     const charactersNames = characters[i].name;
//     const charactersEye = characters[i].eye_color;
//     const charactersGender = characters[i].gender;
//     const charactersheight = characters[i].height;
//     const charactersMass = characters[i].mass;
//     if(charactersNames == "Leia Organa"){
//         console.log(`PERSON NAMED ${charactersNames} HAS BEEN FOUND`);
//     }
//     if(charactersEye == "brown"){

//         console.log(`HER EYE COLOR IS ${charactersEye}`)
//     }
//     if( charactersheight == "150"){
//         console.log(`SHE IS ${charactersheight}CM IN HEIGHT`)
//     }
//     if(charactersMass == "84"){
//         console.log(`SHE IS ${charactersMass}KG `)
//     }







