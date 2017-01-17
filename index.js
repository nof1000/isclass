/**
 * Checks whether a value is an class
 *
 * @module isclass
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/**
 * Constants
 * @private
 */
const RE_CLASS = /^class\s/;

/**
 * Exports
 * @public
 */
module.exports = function(cls) {
    return (
        (typeof(cls) === 'function') &&
        RE_CLASS.test(Function.prototype.toString.call(cls))
    );
};
