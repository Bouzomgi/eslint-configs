const execSync = require("child_process").execSync;
const fs = require("fs");
const path = require("path");

// Get version from package.json
const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
);
const packageVersion = packageJson.version;

// Function to bump version if necessary
function bumpVersionIfNeeded() {
  const remoteHash = execSync(`npm show ${packageJson.name} dist.integrity`)
    .toString()
    .trim();

  // Generate local tarball and get hash
  execSync("npm pack");
  const zipPackageName = packageJson.name.replace("@", "").replace("/", "-");
  const tarballName = `${zipPackageName}-${packageVersion}.tgz`;
  const localHash = execSync(`shasum -a 512 ${tarballName}`)
    .toString()
    .split(" ")[0]
    .trim();

  if (remoteHash !== localHash) {
    console.log("Code has changed, bumping version...");
    execSync("npm version patch", { stdio: "inherit" });
    return true;
  } else {
    console.log("No changes detected, no version bump needed.");
    return false;
  }
}

const versionBumped = bumpVersionIfNeeded();
process.exit(versionBumped ? 0 : 1);
