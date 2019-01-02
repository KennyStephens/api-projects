class GitHub {
    constructor() {
        this.client_id = '319a5d1e801fa3ee1d45';
        this.client_secret = '77e79eb201970c9d4af937c3589e9b6fb4d298a6';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}