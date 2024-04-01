
class SimpleMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}

class StandardMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}

class PremiumMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}

class MemberFactory {
    static list = {
        simple: new SimpleMembership(1000, 6, 'simple'),
        standard: new StandardMembership(2000, 8, 'standard'),
        premium: new PremiumMembership(6000, 5, 'premium')
    }

    create(firstName, type) {
        const membership = MemberFactory.list[type];
        if (membership) {
            return { firstName, ...membership };
        } else {
            throw new Error('Oooooops sorry by');
        }
    }
}

const factory = new MemberFactory();
const users = [];

document.getElementById('subscriptionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.getElementById('membershipType').value;
    try {
        const newUser = factory.create(name, type);
        users.push(newUser);
        displayUsers(users);
    } catch (error) {
        alert(error.message);
    }
});

function displayUsers(usersToDisplay) {
    const usersList = document.getElementById('info');
    
    usersToDisplay.forEach(user => {
        usersList.innerHTML = `<p>${user.firstName} - ${user.type} Membership ( ${user.cost}:$, Duration: ${user.month} months)</p>`;
    });

}

displayUsers(users);
