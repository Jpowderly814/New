using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace JPMC.Api.Controllers;

[ApiController]
[Route("/")]
public class HealthCheckController : ControllerBase
{
    private readonly ILogger<HealthCheckController> _logger;

    public HealthCheckController(ILogger<HealthCheckController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> HealthCheck()
    {
        return await Task.FromResult(new OkObjectResult("healthy"));
    }
}
