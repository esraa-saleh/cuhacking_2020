rmdir -r build
cd react-app
npm run-script build
Xcopy /E /I build ../build
cd ..
