/**
 * Checks whether a value is class
 *
 * @module isclass
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/**
 * Exports
 * @public
 */
module.exports = (cls) => {
    if (typeof(cls) === 'function' && cls.prototype) {
        try {
            cls.arguments && cls.caller;
        } catch(e) {
            return true;
        }
    }
    return false;
};
