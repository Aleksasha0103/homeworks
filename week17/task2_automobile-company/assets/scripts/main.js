class Transport {
  constructor(type, price, brand, image) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.image = image;
  }

  getInfo() {
    return {
      type: this.type,
      brand: this.brand,
      image: this.image,
    };
  }

  getPrice() {
    return {
      price: this.price,
    };
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors, image) {
    super(type, price, brand, image);
    this.doors = doors;
  }

  getDoorsCount() {
    return {
      doors: this.doors,
    };
  }
}

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed, image) {
    super(type, price, brand, image);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return {
      maxSpeed: this.maxSpeed,
    };
  }
}

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image: "/assets/images/audi.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image: "/assets/images/mercedes-benz.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image: "/assets/images/harley-davidson1.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image: "/assets/images/harley-davidson2.jpg",
  },
];

const transportType = [];

for (let item of data) {
  if (item.type === "car") {
    const car = new Car(item.type, item.price, item.brand, item.doors, item.image);
    transportType.push(car);
  } else if (item.type === "bike") {
    const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed, item.image);
    transportType.push(bike);
  }
}

const transportInfo = document.querySelector("main");

for (let item of transportType) {
  const allInfo = item.getInfo();
  const showPrice = item.getPrice();

  const infoType = document.createElement("div");
  transportInfo.appendChild(infoType);
  if (item.type === "car") {
    infoType.textContent = "Тип транспортного средства: Автомобиль";
  } else {
    infoType.textContent = "Тип транспортного средства: Мотоцикл";
  }

  const infoBrand = document.createElement("div");
  transportInfo.appendChild(infoBrand);
  infoBrand.textContent = `Бренд: ${allInfo.brand}`;

  const infoFeatures = document.createElement("div");
  transportInfo.appendChild(infoFeatures);
  if (item.type === "car") {
    infoFeatures.textContent = `Количество дверей: ${item.doors}`;
  } else if (item.type === "bike") {
    infoFeatures.textContent = `Максимальная скорость: ${item.maxSpeed} км/ч`;
  }

  const infoImageContainer = document.createElement("div");
  transportInfo.appendChild(infoImageContainer);
  const infoImage = document.createElement("img");
  infoImage.src = allInfo.image;
  infoImage.alt = allInfo.brand;
  infoImageContainer.appendChild(infoImage);

  const priceParagraph = document.createElement("div");
  transportInfo.appendChild(priceParagraph);
  priceParagraph.classList.add("main__price");
  priceParagraph.textContent = `Цена: ${showPrice.price.toLocaleString()} руб.`;
}
