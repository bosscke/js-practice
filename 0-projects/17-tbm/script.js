const body = document.querySelector("body");

class domain {
  constructor(domain) {
    this.domain = domain;
  }
}

let business = new domain("Business");

const content = `
<section>
<h1>${business.domain}</h1>
</section>
`;
body.innerHTML = content;
