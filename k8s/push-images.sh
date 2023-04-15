docker build -t express-k8s-app .
docker tag express-k8s-app localhost:5001/express-k8s-app:4
docker push localhost:5001/express-k8s-app:4