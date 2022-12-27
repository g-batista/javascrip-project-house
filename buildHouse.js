const playResult = () => {
  // get input from user. HTML form
  let house_size = document.querySelector('input[name = "house"]:checked')
    .value;

  let color = document.querySelector('input[type = "color"]').value;

  let veicle = document.querySelector('input[name = "veicles"]:checked').value;

  let material = document.querySelector('input[name = "material"]:checked')
    .value;

  let sqr_feet = document.querySelector('input[name = "squareFoot"]').value;

  let selections = document.querySelector('.selections');
  let details = document.querySelector('.details');

  // switch the home page to the input entered page
  selections.setAttribute('class', 'hidden');
  details.setAttribute('class', 'details');

  // variables for the empty fields
  let house_result = document.querySelector('.house_size_result');
  let house_img_res = document.querySelector('.house_img_result');
  let color_res = document.querySelector('.color_result');
  let material_result = document.querySelector('.material_result');

  // setting background color to the div tag which shows the selected color.
  color_res.style.backgroundColor = color;

  let base_amount;
  if (house_size === '1') {
    // if the house size is single story, then we multiply  175
    base_amount = parseInt(sqr_feet) * 175;
    house_result.textContent = 'Single Story';
    house_img_res.src = 'images/casa.jpeg '; // setting the image to the empty image
  } else {
    // if the house size is two story, then we multiply  135
    base_amount = parseInt(sqr_feet) * 135;
    house_result.textContent = 'Two Story';
    house_img_res.src = 'images/casa2.jpg'; // setting the image to the empty imag
  }

  if (material === '0') {
    // vinyl
    material_result.src = 'images/vinil.jpeg';
  } else if (material === '1') {
    // wood
    base_amount += 5000;
    base_amount += 10 * sqr_feet;
    material_result.src = 'images/wood.jpg';
  } else if (material === '2') {
    //brick
    base_amount += 8000;
    base_amount += 10 * sqr_feet;
    material_result.src = 'images/brick.jpeg';
  } else if (material === '3') {
    //stucco
    base_amount += 6000;
    material_result.src = 'images/stucco.jpeg';
  } else if (material === '4') {
    // stone
    base_amount += 16000;
    material_result.src = 'images/stone.jpeg';
  }

  // depending on number of vehicles we are adding more money.
  base_amount += parseInt(veicle) * 15000;

  // setting data into the empty fields
  let garage_res = document.querySelector('.vehicles_result');
  garage_res.textContent = veicle;

  let sqfoot_res = document.querySelector('.squarefoot_result');
  sqfoot_res.textContent = sqr_feet;

  let cost = document.querySelector('.cost');
  cost.textContent = base_amount;
};
