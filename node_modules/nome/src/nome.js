import Lill from 'lill'

const isFunction = func => typeof func === 'function'

function NoMe(method) {
	function NoMeWrapped() {
		const args = Array.prototype.slice.call(arguments) // eslint-disable-line prefer-rest-params

		const returnValue = (isFunction(method)
			? Function.prototype.apply.call(method, this, args)
			: undefined
		)

		const NoMe$loop = ({ cb, ctx }) => {
			Function.prototype.apply.call(cb, (ctx || this), args)
		}

		Lill.each(NoMeWrapped, NoMe$loop)

		return returnValue
	}

	NoMeWrapped.notify = NoMe$notify
	NoMeWrapped.denotify = NoMe$denotify

	Lill.attach(NoMeWrapped)

	return NoMeWrapped
}

function NoMe$notify(cb, ctx) {
	if (!isFunction(cb)) {
		throw new TypeError('NoMe.notify expects function for notification')
	}
	const notifier = { cb, ctx }
	Lill.add(this, notifier)
	return notifier
}

function NoMe$denotify(notifier) {
	Lill.remove(this, notifier)
}

NoMe.is = function isNoMe(value) {
	return Boolean(isFunction(value) && value.notify === NoMe$notify)
}

export default Object.freeze(NoMe)
