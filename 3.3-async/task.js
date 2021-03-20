'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }


    addClock(time, callback, id) {
        if (!id) {
            throw new Error('id не передан!');
        }

        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            return console.error('будильник с таким id уже задан');
        }

        this.alarmCollection.push({
            id,
            time,
            callback
        });

    }

    removeClock(id) {
        let length = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
        return length !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        let checkClock = (alarm) => alarm.time === this.getCurrentFormattedTime() && alarm.callback();
        !this.timerId && (this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => checkClock(alarm)), 2000));
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех звонков в количестве ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((alarm) => console.log(`Будильник ${alarm.id} позвонит в ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarmClock = new AlarmClock();

    alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Пора вставать'), 1);

    //};

    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().slice(0, -3), () => {
        console.log('Вставай');
        alarmClock.removeClock(2);
        alarmClock.printAlarms();
    }, 2);

    alarmClock.addClock(
        new Date(Date.now() + 2 * 60000).toTimeString().slice(0, -3),
        () => {
            console.log('Вставай, а то проспишь');
            alarmClock.stop();
            alarmClock.clearAlarms();
            alarmClock.printAlarms();
        }, 3);

    alarmClock.printAlarms();
    alarmClock.start();

};

testCase();