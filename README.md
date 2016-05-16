# Plugin System

## Lessons Learned

### Prefixing can cause unexpected side-effects

A command of `deploy` with a subcommand `log` and a event `writeFile` results in

- `deployLogWriteLog`

A command of `deploy` with an event `logWriteFile` results in

- `deployLogWriteLog`

What works is using some kind of separator:

- `deploy:log:writeLog`
- `deploy:logWriteLog`

Another benefit here is there is no need to camelCase the events.

## Terraform has modules

It's an interesting concept to combine certain setups that can be included e.g.
deploy to Lamba function x, y & create one resource.
