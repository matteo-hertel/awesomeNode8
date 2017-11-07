# NPM5

The main /most exciting features of NPM 5 are:

- speed
  The team at npm have made some very bold claims about speed improvements between versions, claiming some operations are up to 5x faster
- npm will now save by default
    In the previous version of npm, if we wanted to save a package to the `package.json`, we were forced to add the `--save` flag, now this is the default behaviour
- package-lock.json.
    A package-lock.json will be created for you automatically. This is a new, standardized lockfile feature meant for cross-package-manager compatibility. This means that the versions of the packages in use will be locked down and headaches about different package versions will be eliminated.