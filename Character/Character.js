const Constants = require("../Constants.js");

class Character {
  constructor(){
    this._attributes = {
      Bottoms: {
        Color: Constants.Colors.Default
      },
      Shirt: {
        Color: Constants.Colors.Default
      },
      Jacket: {
        Color: Constants.Colors.Default
      },
      Build: { },
      Gender: null,
    }
  }

  get Images(){
    let images = [ ];
    for (let type of Constants.ImageTypes){
      let image = this._attributes[type].Image;
      if (image)
        images.push(image);
    }

    return images;
  }

  Update(updateData){
    let color = updateData.Color;
    let value = updateData.Value;

    let buildImagePath = (relativePath)=>{
      return Constants.Paths.Images + "/" + this._attributes.Gender + "/" +
                this._attributes.Build.Value + "/" + relativePath;
    }
    let update = (attribute)=>{
      if (color) attribute.Color = color;
      if (value) attribute.Value = value;

      if (attribute.Value){
        // Build up the Image string - in the format Images/Value_ColorBuildGender,
        //   eg. Images/Pants_RedSmallMale
        attribute.Image = buildImagePath(attribute.Value + "_" + attribute.Color);
      }
    }

    let updateBuild = (attribute)=>{
      attribute.Value = value;
      attribute.Image = buildImagePath("body_type_" + value);
    }

    console.log(updateData.AnswerType);
    switch (updateData.AnswerType){
      case "Gender":
        this._attributes.Gender = value;
        break;
      case "Build":
        updateBuild(this._attributes.Build);
        break;
      case "Bottoms":
        update(this._attributes.Bottoms);
        break;
      case "Shirt":
        update(this._attributes.Shirt);
        break;
      case "Jacket":
        update(this._attributes.Jacket);
        break;
      default:
        console.log("Unknown type ", updateData.AnswerType);
        break;
    }
  }

}

module.exports.Character = Character;
