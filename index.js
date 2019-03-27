const getRoutes = routes => {
    let allRoutes = []

    routes.map(route => {
        allRoutes.push(route)

        if (route.children) {
            allRoutes = [ ...allRoutes, ...getRoutes(route.children), ]
        }
    })

    return allRoutes
}

class GetRouteBy {
    init (routes) {
        this.routes = getRoutes(routes)
    }

    name (value, routes = []) {
        return this.otherProp('name', value)
    }

    path (value, routes = []) {
        return this.otherProp('path', value)
    }

    otherProp (prop, value, _routes = undefined) {
        const routes = _routes ? getRoutes(_routes) : this.routes

        return routes.filter(route => route[prop] === value)[0]
    }
}

export default new GetRouteBy()