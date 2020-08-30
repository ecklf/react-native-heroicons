#!/bin/sh

mv build/icons/Adjustments.d.ts build/IconType.d.ts
rm -rf build/icons
perl -i -pe "s/'.*'/'.\/IconType'/g" build/index.d.ts
npm pack --dry-run