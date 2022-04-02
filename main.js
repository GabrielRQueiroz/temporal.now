import { Temporal } from '@js-temporal/polyfill';
import {
  mainButton,
  plainDateISOContainer,
  plainTimeISOContainer,
  plainTimeISORoundedContainer,
  zonedTimeISOContainer,
  zonedTimeISODayContainer,
  zonedTimeISODayOfWeekContainer,
  zonedTimeISODaysInMonthContainer,
  zonedTimeISOMonthContainer,
  zonedTimeISOOffsetContainer,
  zonedTimeISORoundedContainer
} from './components';

const plainDateISO = Temporal.Now.plainDateISO();
const plainTimeISO = Temporal.Now.plainTimeISO();
const plainTimeISORounded = Temporal.Now.plainTimeISO().round('seconds');
const zonedDateTimeISO = Temporal.Now.zonedDateTimeISO();
const zonedDateTimeISODay = Temporal.Now.zonedDateTimeISO().day;
const zonedDateTimeISOMonth = Temporal.Now.zonedDateTimeISO().month;
const zonedDateTimeISODaysInMonth = Temporal.Now.zonedDateTimeISO().daysInMonth;
const zonedDateTimeISODayOfWeek = Temporal.Now.zonedDateTimeISO().dayOfWeek;
const zonedDateTimeISOOffset = Temporal.Now.zonedDateTimeISO().offset;
const zonedDateTimeISORounded = Temporal.Now.zonedDateTimeISO().round('seconds');

function renderEverything() {
	plainDateISOContainer.innerHTML = `> ${plainDateISO}`;
	plainTimeISOContainer.innerHTML = `> ${plainTimeISO}`;
	plainTimeISORoundedContainer.innerHTML = `> ${plainTimeISORounded}`;
	zonedTimeISOContainer.innerHTML = `> ${zonedDateTimeISO}`;
	zonedTimeISODayContainer.innerHTML = `> ${zonedDateTimeISODay}`;
	zonedTimeISOMonthContainer.innerHTML = `> ${zonedDateTimeISOMonth}`;
	zonedTimeISODaysInMonthContainer.innerHTML = `> ${zonedDateTimeISODaysInMonth}`;
	zonedTimeISODayOfWeekContainer.innerHTML = `> ${zonedDateTimeISODayOfWeek}`;
	zonedTimeISOOffsetContainer.innerHTML = `> ${zonedDateTimeISOOffset}`;
	zonedTimeISORoundedContainer.innerHTML = `> ${zonedDateTimeISORounded}`;
}

mainButton.addEventListener('click', renderEverything);
