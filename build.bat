rmdir build /s /q
cd react-app
npm run-script build
move build ../build
cd ..
