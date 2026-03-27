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
        //... more records...
        // <- Append your new record here, before the closing ];
    ];

### Step 3 — Add Your Record
Append a new object to the end of the array using the submission template below. Make sure to place a comma after the closing `}` of the previous record before adding yours.

### Step 4 — Verify Your Data
Open `index.html` in a browser locally to confirm:

- Your record appears under the correct category header
- All hyperlinks open correctly
- The RRID link resolves at [scicrunch.org/resolver](https://scicrunch.org/resolver)

### Step 5 — Submit a Pull Request
1. Commit your changes to your forked repository.
2. Navigate to the original repository and click **New Pull Request**.
3. Briefly describe what you added or changed in the PR description.
4. Our team will review the genomic data and links before approving the merge.

---

## 📝 Submission Template

Copy and paste this object into the `RECORDS` array in `index.html`, filling in all fields:

    {
        type        : "Model Type",
        mgiName     : "MGI Approved Name",
        mgiLink     : "https://www.informatics.jax.org/...",
        commonName  : "Common/Lab Name",
        description : "Short description of the genetic modification and key features.",
        background  : "Genetic Background",
        coords      : "Chr16: 00,000,000-00,000,000",
        orthologs   : "00",
        publication : "Author et al., Year",
        pubLink     : "https://pubmed.ncbi.nlm.nih.gov/XXXXXXXX/",
        availability: "JAX:XXXXXX",
        availLink   : "https://www.jax.org/strain/XXXXXX",
        rrid        : "RRID:IMSR_JAX:XXXXXX",
    },

---

## ✅ Filled Examples

### Example 1 — JAX Model with Full Data

    {
        type        : "Duplication",
        mgiName     : "Dp(16)1Yey",
        mgiLink     : "https://www.informatics.jax.org/allele/MGI:4436715",
        commonName  : "Dp(16)1Yey",
        description : "Cre-mediated duplication of Lipi to Zbtb21 on Mmu16, spanning the region syntenic to Hsa21.",
        background  : "B6",
        coords      : "Chr16: 75,155,590-97,794,739",
        orthologs   : "117",
        publication : "Li Z, et al., 2007",
        pubLink     : "https://pubmed.ncbi.nlm.nih.gov/17660530/",
        availability: "JAX:013530",
        availLink   : "https://www.jax.org/strain/013530",
        rrid        : "RRID:IMSR_JAX:013530",
    },

### Example 2 — EMMA / Infrafrontier Model

    {
        type        : "Deletion",
        mgiName     : "Ms1Yah",
        mgiLink     : "",
        commonName  : "Ms1Yah",
        description : "Cre-mediated deletion of Col6a1 to Prmt2 on Mmu10.",
        background  : "B6",
        coords      : "Chr10: 76,043,060-76,561,878",
        orthologs   : "12",
        publication : "Lopes Pereira P, et al., 2009",
        pubLink     : "https://pubmed.ncbi.nlm.nih.gov/19521500/",
        availability: "EMMA:01808",
        availLink   : "https://www.infrafrontier.eu/search?keyword=EM:01808",
        rrid        : "RRID:IMSR_EM:01808",
    },

### Example 3 — Lab-Only Model (No RRID, No Repository)

    {
        type        : "Duplication",
        mgiName     : "Ts3Yah",
        mgiLink     : "",
        commonName  : "Ts3Yah",
        description : "Inactivation of Cstb/Col6a1; duplication of Hsa21 syntenic segment.",
        background  : "B6",
        coords      : "N/A",
        orthologs   : "25",
        publication : "Herault Lab",
        pubLink     : "",
        availability: "Herault Lab",
        availLink   : "",
        rrid        : "Herault Lab",
    },

---

## 📐 Field Reference

| Field | Required | Accepted Values / Format |
|---|---|---|
| type | ✅ | Segmental Trisomy, Translocation, Transchromosomic, Duplication, Deletion |
| mgiName | ✅ | Official MGI strain name string |
| mgiLink | ⬜ | Full MGI URL or blank if unavailable |
| commonName | ✅ | Short lab or common name string |
| description | ✅ | Plain text, 1–3 sentences describing the genetic modification |
| background | ✅ | Genetic background strain string |
| coords | ✅ | ChrN: XX,XXX,XXX–XX,XXX,XXX in GRCm39, or N/A |
| orthologs | ✅ | Numeric string e.g. 101, 64 |
| publication | ✅ | Author et al., Year format |
| pubLink | ⬜ | Full PubMed URL or blank if unavailable |
| availability | ✅ | JAX:XXXXXX, EMMA:XXXXX, or lab name string |
| availLink | ⬜ | Full repository URL or blank if unavailable |
| rrid | ✅ | RRID:IMSR_JAX:XXXXXX, RRID:IMSR_EM:XXXXX, or lab name if no RRID exists |

---

## 🗂️ Valid Model Types

| Type | Description |
|---|---|
| Segmental Trisomy | Trisomy for a chromosomal segment homologous to Hsa21 |
| Translocation | Segment translocated to another chromosome |
| Transchromosomic | Carries a freely segregating human chromosome 21 or derivative |
| Duplication | Cre-mediated or engineered duplication of an Hsa21-syntenic segment |
| Deletion | Cre-mediated or engineered deletion of an Hsa21-syntenic segment |

---

## 🔗 Useful Resources When Filling In Data

| Resource | Link |
|---|---|
| Mouse Genome Informatics (MGI) | [informatics.jax.org](https://www.informatics.jax.org) |
| Jackson Laboratory (JAX) Strain Search | [jax.org/search](https://www.jax.org/search) |
| Infrafrontier / EMMA Strain Search | [infrafrontier.eu](https://www.infrafrontier.eu) |
| SciCrunch RRID Resolver | [scicrunch.org/resolver](https://scicrunch.org/resolver) |
| RRID Source nlx_154697-1 | [rrid.site/data/source/nlx_154697-1/search](https://rrid.site/data/source/nlx_154697-1/search) |
| PubMed | [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov) |
| UCSC Genome Browser GRCm39 | [genome.ucsc.edu](https://genome.ucsc.edu) |
| Ensembl Mouse Genome GRCm39 | [ensembl.org](https://www.ensembl.org/Mus_musculus/Info/Index) |

---

## ❓ Questions or Issues?

- **Bug or data error?** → [Open a GitHub Issue](https://github.com/abbash83/DS_Rodent_Models_Database/issues)
- **New model to add?** → Follow the steps above and submit a Pull Request
- **Not sure about a field?** → Open an Issue and ask — we are happy to help verify data before submission
