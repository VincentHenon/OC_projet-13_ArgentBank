export default class UserProfile {
    constructor(data) {
        this.id = data.id
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.email = data.email
    }
}