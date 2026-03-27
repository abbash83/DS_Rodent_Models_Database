# 🧬 Down Syndrome Mouse Models Database
> A comprehensive, interactive, and searchable reference for DS research models.

![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-blue.svg)

---

## 🌐 Live Access
**View the Interactive Table here:** 👉  https://abbash83.github.io/DS_Rodent_Models_Database/

---

## 📋 Overview
This repository serves as a centralized hub for researchers to identify and compare **Down Syndrome (DS) mouse models**. It translates complex genomic data into a user-friendly, searchable web interface.

### ✨ Key Features
* 🔍 **Instant Filtering**: Search across all fields including Strain Name, Gene, or Author.
* 🗺️ **Genomic Precision**: All coordinates are mapped to **GRCm39** (Mouse) and **GRCm38** (Human).
* 🔗 **Integrated Resources**: One-click access to **JAX**, **Infrafrontier**, and **PubMed**.

---

## 🤝 How to Contribute
We welcome the community to help keep this database up-to-date. If you have a new model or an update to existing data:

1. **Fork** this repository.
2. **Add** your data to `models.html` (see the [Submission Template](#-submission-template) below).
3. **Submit a Pull Request**. Our team will review the genomic coordinates and descriptions before approving the merge.

For detailed steps, please read our [**Contributing Guidelines**](./CONTRIBUTING.md).

---

## 📝 Submission Template
When adding a row to the `<tbody>` in `models.html`, please use the following structure:

```html
<tr>
    <td><a href="MGI_LINK" target="_blank">MGI Name</a></td>
    <td>Common Name</td>
    <td>Model Type</td>
    <td>Detailed Short Description</td>
    <td>Genetic Background</td>
    <td>Chr Position (GRCm39)</td>
    <td>Gene Count</td>
    <td><a href="PUBMED_LINK" target="_blank">Author, Year</a></td>
    <td><a href="AVAILABILITY_LINK" target="_blank">Stock # / Lab</a></td>
</tr>
