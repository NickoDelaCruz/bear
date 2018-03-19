export let bear = {
  foodLevel: 10,
  moodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  setMood: function() {
    const moodInterval = setInterval(() => {
      this.moodLevel=this.moodLevel-2;
      if (this.didBearGetAngry() == true) {
        clearInterval(moodInterval);
        return "bear got mad!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  didBearGetAngry: function() {
    if (this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  },
  tickOff: function(amount) {
    let that = this;
    return function(action) {
      that.moodLevel -= amount
      return `The bear didn't like that you ${action}! Mood level goes up ${amount}!`
    }
  },
};

bear.throwStick = bear.tickOff(5);
bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));
