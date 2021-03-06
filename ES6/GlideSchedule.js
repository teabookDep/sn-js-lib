/**
 * The scoped GlideSchedule API provides methods for performing operations on GlideSchedule
 * objects, such as adding new schedule segments to a schedule, determining if a datetime is within
 * the schedule, or setting the schedule timezone.
 * @class GlideSchedule
 * @typedef {Object}  GlideSchedule
 */
class GlideSchedule {
    /**
     * Instantiates an empty GlideSchedule object.
     */
    constructor() {}
    /**
     * Adds a new schedule segment to the current schedule.
     * @param {GlideDateTime} startDate The starting date of the new schedule segment.
     * @param {GlideDuration} offSet The time offset of the new schedule segment.
     * @returns The schedule updated with the new schedule segment.
     * @example var startDate = new GlideDateTime('2014-01-02');
     * var days = 2;
     * var dur = new GlideDuration(60 * 60 * 24 * 1000 * days);
     * var schedule = new GlideSchedule();
     * var end = schedule.add(startDate, dur);
     * gs.info(end);
     */
    add(startDate, offSet) {}
    /**
     * Determines the elapsed time in the schedule between two date time values using the
     * timezone of the schedule or, if that is not specified, the timezone of the session.
     * @param {GlideDateTime} startDate The starting datetime.
     * @param {GlideDateTime} endDate The ending datetime.
     * @returns The difference between the starting and ending datetime.
     * @example var startDate = new GlideDateTime('2014-10-16 02:00:00');
     * var endDate = new GlideDateTime('2014-10-18 04:00:00');
     * var schedule = new GlideSchedule();
     * schedule.load('090eecae0a0a0b260077e1dfa71da828'); // loads "8-5 weekdays excluding holidays" schedule
     * var duration = schedule.duration(startDate, endDate);
     * gs.info(duration.getDurationValue()); // gets the elapsed time in schedule
     */
    duration(startDate, endDate) {}
    /**
     * Retrieves the schedule name.
     * @returns The name of the current schedule.
     * @example sys_id ='04e664654a36232701a2247dcd8fc4cf'; // sys_id for "Application" schedule record
     * var sched = new GlideSchedule(sys_id);
     * gs.info(sched.getName());
     */
    getName() {}
    /**
     * Determines if the given datetime is within the current schedule.
     * @param {GlideDateTime} time The datetime value to check.
     * @returns True if the specified datetime is within the schedule; otherwise,
     * false.
     * @example var g = new GlideRecord('cmn_schedule');
     * g.addQuery('type', 'blackout');
     * g.query();
     * if (g.next()) {
     * var sched = new GlideSchedule(g.sys_id);
     * var d = new GlideDateTime();
     * d.setDisplayValue("2007-09-18 12:00:00");
     * if (sched.isInSchedule(d))
     * gs.info("Is in the schedule");
     * else
     * gs.info("Is NOT in the schedule");
     * }
     */
    isInSchedule(time) {}
    /**
     * Determines if the current schedule is valid. A schedule is valid if it has at least one
     * schedule span.
     * @returns True if the schedule is valid.
     * @example var g = new GlideRecord('cmn_schedule');
     * g.addQuery('type', 'blackout');
     * g.query();
     * if (g.next()) {
     * var sched = new GlideSchedule(g.sys_id);
     * var d = new GlideDateTime();
     * d.setDisplayValue("2007-09-18 12:00:00");
     * if (sched.isValid())
     * gs.info("Is valid");
     * else
     * gs.info("Is not valid");
     * }
     */
    isValid() {}
    /**
     * Loads a schedule with the schedule information.
     * @param {String} sysID The system ID of the schedule.
     * @param {String} timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current
     * session timezone is used for the schedule.
     * @param {String} excludeSpanID Any span to exclude.
     * @returns Method does not return a value
     * @example var x = new GlideSchedule();
     * x.load('08fcd0830a0a0b2600079f56b1adb9ae');
     */
    load(sysID, timeZone, excludeSpanID) {}
    /**
     * Sets the timezone for the current schedule.
     * @param {String} timeZone The timezone.
     * @returns Method does not return a value
     * @example var schedule = new GlideSchedule();
     * schedule.setTimeZone('US/Pacific');
     */
    setTimeZone(timeZone) {}
    /**
     * Determines how much time (in milliseconds) until start time of the next schedule
     * item.
     * @param {GlideDateTime} time The time to be evaluated.
     * @param {String} timeZone The timezone.
     * @returns The number of milliseconds until the start time of the next schedule item.
     * Returns -1 if never.
     * @example var startDate = new GlideDateTime('2014-10-25 08:00:00');
     * var glideSchedule = new GlideSchedule('08fcd0830a0a0b2600079f56b1adb9ae', 'UTC');
     * gs.info(glideSchedule.whenNext(startDate));
     */
    whenNext(time, timeZone) {}
}