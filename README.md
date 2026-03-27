# 🧬 Down Syndrome Mouse Models Database
> A comprehensive, interactive, and searchable reference for DS rodent research models.

![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-blue.svg)

---

## 🌐 Live Access
**View the Interactive Table here:** 👉 [**DS Mouse Models Database**](https://abbash83.github.io/DS_Rodent_Models_Database/)

---

## 📋 Overview
This repository serves as a centralized hub for researchers to identify and compare **Down Syndrome (DS) mouse models**. It translates complex genomic data into a user-friendly, searchable, and filterable web interface — all powered by a single self-contained `index.html` file with no external dependencies or build steps required.

The dataset was originally compiled from:

> Folz, A., Sloan, K., Roper, R.J. (2025). Mouse Models of Down Syndrome. In: Ye, B., Reeves, R. (eds) *Genetic Models of Down Syndrome*. Springer, Cham. https://doi.org/10.1007/978-3-031-78611-2_1

---

## ✨ Key Features

- 🔍 **Instant Search** — Filter across all fields simultaneously: strain name, RRID, type, description, genetic background, publication, and more.
- 🗂️ **Type Filtering** — Narrow results by model category: Segmental Trisomy, Translocation, Transchromosomic, Duplication, or Deletion.
- 🗺️ **Genomic Precision** — All coordinates mapped to **GRCm39** (Mouse) and **GRCh38** (Human) unless otherwise noted.
- 🔗 **Integrated Resources** — One-click access to **JAX**, **Infrafrontier/EMMA**, **PubMed**, **MGI**, and the **SciCrunch RRID Resolver**.
- ↕️ **Sortable Columns** — Click any column header to sort ascending or descending.
- ⬇️ **CSV Export** — Download the currently filtered dataset as a `.csv` file.
- 📄 **Pagination** — 30 records per page for clean navigation.

---

## 🗂️ Repository Structure

    DS_Rodent_Models_Database/
    │
    ├── index.html        # Main database — all records and UI logic live here
    ├── README.md         # This file
    ├── CONTRIBUTING.md   # Contribution guidelines and submission template
    └── LICENSE           # MIT License

---

## 📦 Data Structure

All records are stored as JavaScript objects inside the `RECORDS` array in `index.html`. Each record uses the following fields:

| Field | Required | Description |
|---|---|---|
| type | ✅ | Model category: Segmental Trisomy, Translocation, Transchromosomic, Duplication, or Deletion |
| mgiName | ✅ | Official MGI approved strain designation |
| mgiLink | ⬜ | URL to the MGI record — leave blank if unavailable |
| commonName | ✅ | Lab or common name e.g. Ts65Dn, Dp1Tyb |
| description | ✅ | Short description of the genetic modification |
| background | ✅ | Genetic background strain e.g. B6, B6EiC3Sn |
| coords | ✅ | Chromosomal position in GRCm39 — use N/A if unknown |
| orthologs | ✅ | Number of Hsa21 orthologous genes at dosage imbalance |
| publication | ✅ | First publication citation (Author et al., Year) |
| pubLink | ⬜ | PubMed URL — leave blank if unavailable |
| availability | ✅ | Stock number e.g. JAX:001924 or lab name |
| availLink | ⬜ | URL to JAX, EMMA, or lab page — leave blank if unavailable |
| rrid | ✅ | Full RRID string e.g. RRID:IMSR_JAX:001924 or lab name if no RRID exists |

---

## 🤝 How to Contribute

We welcome community contributions to keep this database accurate and up-to-date. To add a new model or correct an existing entry:

1. **Fork** this repository.
2. **Edit** `index.html` and add your record to the `RECORDS` array.
3. **Verify** all data and links are accurate.
4. **Submit a Pull Request** for review.

For full instructions and the submission template, see [**CONTRIBUTING.md**](./CONTRIBUTING.md).

---

## 🔗 Key External Resources

| Resource | Link |
|---|---|
| Mouse Genome Informatics (MGI) | [informatics.jax.org](https://www.informatics.jax.org) |
| Jackson Laboratory (JAX) | [jax.org](https://www.jax.org) |
| Infrafrontier / EMMA | [infrafrontier.eu](https://www.infrafrontier.eu) |
| SciCrunch RRID Resolver | [scicrunch.org/resolver](https://scicrunch.org/resolver) |
| PubMed | [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov) |
| RRID Source nlx_154697-1 | [rrid.site/data/source/nlx_154697-1/search](https://rrid.site/data/source/nlx_154697-1/search) |

---

## 📜 License
This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact
For questions, suggestions, or issues, please [open a GitHub Issue](https://github.com/abbash83/DS_Rodent_Models_Database/issues) or submit a Pull Request.
