db.createUser(
    {
        user: "mike",
        pwd: "pass123",
        roles: [
            { role: "dbOwner", db: "SIT780"}
        ]
    }
);