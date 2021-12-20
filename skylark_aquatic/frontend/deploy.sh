#!/bin/bash
sed -i 's/process.env.API_URL/"http:\/\/aquatic.aocweb.my.id\/"/g' $(grep -r 'process.env.API_URL' src | cut -d ':' -f 1 | sort | uniq)