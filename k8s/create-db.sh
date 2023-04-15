#!/bin/bash

helm upgrade --install my-app-db bitnami/postgresql \
--version 12.2.2 \
--set global.postgresql.auth.postgresPassword=postgres \
--set global.postgresql.auth.database=my_app_dev