const React = require('react');
const { mount } = require('enzyme');
const { Game } = require('../src/game');

const checkMessageIsDisplayed = (driver) => {
    const message = driver.find('.message');
    expect(message.length).toEqual(1);
}

const checkInfoIsDisplayed = (driver) => {
    const info = driver.find('.info');
    expect(info.length).toEqual(1);
}

test("test created.", () => {
    const driver = mount(<Game />);
    checkMessageIsDisplayed(driver);
    checkInfoIsDisplayed(driver);
});

test("cards test", () => {
    const driver = mount(<Game />);

    let msg = undefined;

    global.alert = (s) => { msg = s };

    const first = driver.find('.card').at(2);
    first.simulate('click');

    checkMessageIsDisplayed(driver);
})

test("multiple test", () => {
    let driver = mount(<Game />);


    let msg = undefined;

    global.alert = (s) => { msg = s };

    for (let i = 0; i < 20; i++) {

        const first = driver.find('.card').at(2);
        first.simulate('click');

        checkMessageIsDisplayed(driver);
        msg = undefined;
        driver = mount(<Game />);

    }
})
