abstract class Q24_Appliance {
  abstract turnOn(): void;
}

class Q24_Fan extends Q24_Appliance {
  turnOn(): void { console.log("Fan is on"); }
}

class Q24_AirConditioner extends Q24_Appliance {
  turnOn(): void { console.log("Air Conditioner is on"); }
}

// Demo
(() => {
  new Q24_Fan().turnOn();
  new Q24_AirConditioner().turnOn();
})();
