/**
 * Checks whether a value is an class
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
    if (typeof(cls) === 'function') {
        if (cls.prototype) {
            try {
                cls.arguments && cls.caller;
                return false;
            } catch(e) {
                return true;
            }
        }
    }

    return false;
};
