#!/usr/bin/env bash

docker rm keycloak-testing-container || true

cd "C:/Users/sbendalam/Downloads/keycloakify-starter-ajay/build_keycloak"

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -v "C:/Users/sbendalam/Downloads/keycloakify-starter-ajay/build_keycloak/src/main/resources/theme/keycloakify-starter":"/opt/keycloak/themes/keycloakify-starter":rw \
   -v "C:/Users/sbendalam/Downloads/keycloakify-starter-ajay/build_keycloak/src/main/resources/theme/keycloakify-starter-variant-1":"/opt/keycloak/themes/keycloakify-starter-variant-1":rw \
   -it quay.io/keycloak/keycloak:21.1.2 \
   start-dev --features=declarative-user-profile
