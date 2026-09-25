#!/usr/bin/env bash
set -euo pipefail

read -r -p "Admin name: " ADMIN_NAME
read -r -p "Admin email: " ADMIN_EMAIL
read -r -s -p "Admin password (12-128 characters): " ADMIN_PASSWORD
printf '\n'
export ADMIN_NAME ADMIN_EMAIL ADMIN_PASSWORD
node scripts/create-admin.js
unset ADMIN_PASSWORD
