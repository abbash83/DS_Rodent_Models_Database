# 🤝 Contributing to the DS Mouse Models Database

Thank you for helping keep this database accurate and up-to-date! This guide explains exactly how to add a new record or correct an existing one.

---

## 📋 Before You Start

Please check the following before submitting:

- [ ] Search the live database to confirm the model is **not already listed**
- [ ] Confirm chromosomal coordinates are based on **GRCm39**
- [ ] Confirm all URLs (MGI, PubMed, JAX/EMMA) are **valid and reachable**
- [ ] Confirm the RRID resolves correctly at [scicrunch.org/resolver](https://scicrunch.org/resolver)

---

## 🛠️ How to Add or Update a Record

### Step 1 — Fork the Repository
Click **Fork** at the top-right of the repository page to create your own copy.

### Step 2 — Open `index.html`
The entire database lives in a single file: `index.html`. Open it and find the `RECORDS` array inside the `<script>` tag near the bottom of the file. It looks like this:

```javascript
const RECORDS = [
    {
        type        : "Segmental Trisomy",
        mgiName     : "Ts(17<16>)65Dn (001924)",
        mgiLink     : "https://www.informatics.jax.org/marker/MGI:2178111",
        commonName  : "Ts65Dn (001924)",
        description : "Trisomy for a marker chromosome containing a segment of Mrpl39...",
        background  : "B6EiC3Sn",
        coords      : "Breakpoint is Chr 16: 84,351,351 bp and Chr 17 9,426,822 bp",
        orthologs   : "101",
        publication : "Davisson MT, et al., 1993",
        pubLink     : "https://pubmed.ncbi.nlm.nih.gov/8115398/",
        availability: "JAX:001924",
        availLink   : "https://www.jax.org/strain/001924",
        rrid        : "RRID:IMSR_JAX:001924",
    },
    // ... more records ...
    // ← Append your new record here, before the closing ];
];
