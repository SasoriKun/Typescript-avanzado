enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER =  "customer"
}

type User = {
  username: string
  role: ROLES
}

const SasoUser: User = {
  username: 'Sasori',
  role: ROLES.ADMIN
}
