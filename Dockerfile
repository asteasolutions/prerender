FROM irocke-build.astea:5000/node

WORKDIR /prerender
COPY package.json package.json
RUN npm install

COPY . /prerender
    
CMD ["node", "server"]

EXPOSE 3001
